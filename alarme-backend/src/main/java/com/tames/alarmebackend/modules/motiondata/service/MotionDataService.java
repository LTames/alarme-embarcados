package com.tames.alarmebackend.modules.motiondata.service;

import com.tames.alarmebackend.modules.motiondata.dto.CreateMotionDataDto;
import com.tames.alarmebackend.modules.motiondata.dto.MotionDataDto;
import com.tames.alarmebackend.modules.motiondata.entity.MotionData;
import com.tames.alarmebackend.modules.motiondata.mapper.MotionDataMapper;
import com.tames.alarmebackend.modules.motiondata.repository.MotionDataRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
public class MotionDataService {
    private final MotionDataRepository motionDataRepository;
    private final MotionDataMapper motionDataMapper;

    public MotionDataService(MotionDataRepository motionDataRepository, MotionDataMapper motionDataMapper) {
        this.motionDataRepository = motionDataRepository;
        this.motionDataMapper = motionDataMapper;
    }

    public MotionDataDto createMotionData(CreateMotionDataDto createMotionDataDto) {
        MotionData motionData = motionDataMapper.createMotionDataDtoToMotionData(createMotionDataDto);

        return motionDataMapper.motionDataToMotionDataDto(
                motionDataRepository.save(motionData)
        );

    }

    public List<MotionDataDto> getAllMotionData() {
        return motionDataRepository.findAll().stream()
                .map(motionDataMapper::motionDataToMotionDataDto)
                .toList();
    }
}
