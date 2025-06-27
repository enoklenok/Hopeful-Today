const TopInfoList = () => {
  const dummyData = {
    temperature: '14.6',
    weather: '쾌적함',
    findDust: '보통',
  };

  const savedTemperature = localStorage.getItem('saved_temperature');
  return (
    <div>
      <ul className="text-end">
        <li className="text-5xl font-semibold">{savedTemperature}°C</li>
        <li className="text-xl font-semibold text-blue-600">
          {dummyData.weather}
        </li>
        <li className="text-xl text-blue-600">미세먼지 {dummyData.findDust}</li>
      </ul>
    </div>
  );
};

export default TopInfoList;
