package com.tames.alarmebackend.modules.motiondata.mapper;

import com.tames.alarmebackend.modules.motiondata.dto.CreateMotionDataDto;
import com.tames.alarmebackend.modules.motiondata.dto.MotionDataDto;
import com.tames.alarmebackend.modules.motiondata.entity.MotionData;
import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class MotionDataMapper {

  public MotionDataDto motionDataToMotionDataDto(MotionData motionData) {
    return new MotionDataDto(
        motionData.getId(),
        motionData.getSensorName(),
        motionData.getTimestamp().toString());
  }

  public MotionData createMotionDataDtoToMotionData(CreateMotionDataDto createMotionDataDto) {
    return new MotionData(
        createMotionDataDto.sensorName()
    );
  }
}
