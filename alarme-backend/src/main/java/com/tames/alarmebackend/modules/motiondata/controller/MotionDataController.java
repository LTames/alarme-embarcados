package com.tames.alarmebackend.modules.motiondata.controller;

import com.tames.alarmebackend.modules.motiondata.dto.CreateMotionDataDto;
import com.tames.alarmebackend.modules.motiondata.dto.MotionDataDto;
import com.tames.alarmebackend.modules.motiondata.service.MotionDataService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/motion-data")
public class MotionDataController {
    private final MotionDataService motionDataService;

    public MotionDataController(MotionDataService motionDataService) {
        this.motionDataService = motionDataService;
    }

    @PostMapping
    public ResponseEntity<MotionDataDto> createMotionData(@RequestBody CreateMotionDataDto createMotionDataDto) {
        return new ResponseEntity<>(
                motionDataService.createMotionData(createMotionDataDto),
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<List<MotionDataDto>> getAllMotionData() {
        return new ResponseEntity<>(
                motionDataService.getAllMotionData(),
                HttpStatus.OK
        );
    }
}
