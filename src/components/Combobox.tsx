// * Library
import clsx from 'clsx';
import {
  Combobox as HU_Combobox,
  ComboboxButton as HU_ComboboxButton,
  ComboboxInput as HU_ComboboxInput,
  ComboboxOptions as HU_ComboboxOptions,
  ComboboxOption as HU_ComboboxOption,
} from '@headlessui/react';
import * as Icon from '@heroicons/react/20/solid';

// * Stores
import { useSunTimeStore } from '@stores/useSunTimeStore';

// * Type
interface City {
  id: string;
  name: string;
  districts: District[];
}

interface District {
  id?: string;
  name?: string;
  nx?: number;
  ny?: number;
}

type Options = City | District;

interface ComboboxProps {
  onChange: (value: Options) => void;
  // onReset : ;
  options: Options[];
  placeholder?: string;
  selected: Options | null;
}

/** 검색이 가능한 Select 컴포넌트 */
const Combobox = ({
  onChange,
  onReset,
  options,
  placeholder = '값을 선택해주세요',
  selected,
  setQuery,
  query,
}: ComboboxProps) => {
  const { isDayTime } = useSunTimeStore();

  const handleClickQueryReset = () => {
    setQuery('');
    onReset();
  };

  // 검색 값에 맞는 옵션 필터링
  const filteredOptions =
    query === '' ? options : options.filter((option) => (option?.name ?? '').includes(query));

  const inputClassName = clsx(
    'w-full',
    'px-3',
    'py-2',
    'pr-20',
    'rounded-xl',
    'backdrop-blur-sm',
    'focus:outline-none',
    'shadow-lg',
    'text-xl',
    'truncate',
    isDayTime ? 'bg-white/10 text-black' : 'bg-black/30 text-gray-200',
  );

  const comboOptionsClassName = clsx(
    'absolute',
    'z-50',
    'mt-1',
    'max-h-60',
    'w-full',
    'overflow-auto',
    'rounded-xl',
    'backdrop-blur-sm',
    'shadow-lg',
    'text-xl',
    isDayTime ? 'bg-white/30' : 'bg-black/30 text-gray-300',
  );

  const comboOptionClassName = clsx(
    'flex',
    'items-center',
    'px-4',
    'gap-2',
    'py-3',
    'cursor-pointer',
    'data-selected:font-bold',
    isDayTime
      ? 'data-active:bg-gray-700/10 data-selected:bg-gray-700/15 data-selected:text-black'
      : 'data-active:bg-white/10 data-selected:bg-white/20 data-selected:text-gray-200',
  );

  const noResultClassName = clsx(
    'select-none',
    'px-4',
    'py-3',
    isDayTime ? 'text-black' : 'text-white',
  );

  return (
    <div className="relative w-full h-full mr-1">
      <HU_Combobox
        value={selected}
        onChange={onChange}
        immediate={true} // 인풋 클릭 시 옵션 표시
      >
        {/* 입력창 */}
        <div className="relative flex items-stretch w-full h-full">
          <HU_ComboboxInput
            displayValue={(option) => option?.name ?? ''}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            className={inputClassName}
          />
          {/* 버튼 */}
          {(query || selected) && (
            <div className="absolute flex items-center h-full inset-y-0 right-8 px-2.5">
              <button className="cursor-pointer" onClick={handleClickQueryReset}>
                <Icon.XMarkIcon className={`w-6 h-6 ${isDayTime ? 'text-black' : 'text-white'} `} />
              </button>
            </div>
          )}
          <HU_ComboboxButton className="absolute inset-y-0 right-0 px-2.5 cursor-pointer">
            <Icon.ChevronDownIcon
              className={`w-6 h-6 ${isDayTime ? 'text-black' : 'text-white'} `}
            />
          </HU_ComboboxButton>
        </div>

        {/* 선택창 */}
        <HU_ComboboxOptions className={comboOptionsClassName}>
          {/* 검색 결과 없을 시 */}
          {filteredOptions.length === 0 ? (
            <div data-role="no-result" className={noResultClassName}>
              결과 없음
            </div>
          ) : (
            filteredOptions.map((option) => (
              <HU_ComboboxOption key={option.id} value={option} className={comboOptionClassName}>
                <div className="">{option.name}</div>
              </HU_ComboboxOption>
            ))
          )}
        </HU_ComboboxOptions>
      </HU_Combobox>
    </div>
  );
};

export default Combobox;
