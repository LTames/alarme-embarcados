package com.tames.alarmebackend.modules.motiondata.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Entity
@Data
@NoArgsConstructor
public class MotionData {
    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "sensor_name")
    private String sensorName;

    @Column(name = "timestamp")
    private Instant timestamp;

    public MotionData(String sensorName, Instant timestamp) {
        this.sensorName = sensorName;
        this.timestamp = timestamp;
    }
}
