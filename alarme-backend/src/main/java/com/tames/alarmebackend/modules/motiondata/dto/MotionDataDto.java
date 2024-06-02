package com.tames.alarmebackend.modules.motiondata.dto;

public record MotionDataDto (
        Long id,
        String sensorName,
        String timestamp
) {}
