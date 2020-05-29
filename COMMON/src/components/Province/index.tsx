import React, { useState, useEffect } from 'react';
import { Select, Space } from 'antd';
import areaData from './data/area.json';
import cityData from './data/city.json';
import provinceData from './data/province.json';

interface ProvinceValue {
  province: string;
  city: string;
  area: string;
}

interface ProvinceProps {
  value?: ProvinceValue;
  onChange?: (value: ProvinceValue) => void;
}

const Province: React.FC<ProvinceProps> = ({ value = {}, onChange }) => {
  const [city, setCity] = useState(
    cityData.filter((v: any) => v.provinceCode === provinceData[0].code),
  );
  const [area, setArea] = useState(
    areaData.filter((v: any) => v.cityCode === cityData[0].code),
  );
  const [currentProvince, setCurrentProvince] = useState(provinceData[0].code);
  const [currentCity, setCurrentCity] = useState(city[0].code);
  const [currentArea, setCurrentArea] = useState(area[0].code);

  useEffect(() => {
    const newCity = cityData.filter(
      (v: any) => v.provinceCode === currentProvince,
    );
    setCity(newCity);
    setCurrentCity(newCity[0].code);
  }, [currentProvince]);

  useEffect(() => {
    const newArea = areaData.filter((v: any) => v.cityCode === currentCity);
    setArea(newArea);
    setCurrentArea(newArea[0].code);
  }, [currentCity]);

  useEffect(() => {
    if (onChange) {
      onChange({
        ...value,
        province: currentProvince,
        city: currentCity,
        area: currentArea,
      });
    }
  }, [currentProvince, currentCity, currentArea]);

  return (
    <Space>
      <Select
        value={value.province || currentProvince}
        style={{ minWidth: 130 }}
        onSelect={value => {
          setCurrentProvince(value);
        }}
      >
        {provinceData.map((v: any) => (
          <Select.Option value={v.code} key={v.code}>
            {v.name}
          </Select.Option>
        ))}
      </Select>
      <Select
        value={value.city || currentCity}
        style={{ minWidth: 130 }}
        onSelect={value => {
          setCurrentCity(value);
        }}
      >
        {city.map((v: any) => (
          <Select.Option value={v.code} key={v.code}>
            {v.name}
          </Select.Option>
        ))}
      </Select>
      <Select
        value={value.area || currentArea}
        style={{ minWidth: 130 }}
        onSelect={value => {
          setCurrentArea(value);
        }}
      >
        {area.map((v: any) => (
          <Select.Option value={v.code} key={v.code}>
            {v.name}
          </Select.Option>
        ))}
      </Select>
    </Space>
  );
};

export default Province;
