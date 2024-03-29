package com.purduecoursefinder.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.purduecoursefinder.models.PCFClass;
import com.purduecoursefinder.models.Section;

public interface SectionRepository extends JpaRepository<Section, UUID> {
    List<Section> findAllByCls(PCFClass cls);
}
