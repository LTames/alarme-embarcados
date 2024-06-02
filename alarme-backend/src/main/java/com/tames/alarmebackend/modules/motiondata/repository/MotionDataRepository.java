package com.tames.alarmebackend.modules.motiondata.repository;

import com.tames.alarmebackend.modules.motiondata.entity.MotionData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MotionDataRepository extends JpaRepository<MotionData, Long> {
}
