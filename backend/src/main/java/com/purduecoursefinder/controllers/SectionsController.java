package com.purduecoursefinder.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.purduecoursefinder.models.dto.SectionCourseDTO;
import com.purduecoursefinder.models.dto.SectionDTO;
import com.purduecoursefinder.services.PurdueApiService;

@RestController
public class SectionsController {
    @Autowired
    private PurdueApiService purdueApiService;

    @GetMapping("/sections/{courseId}")
    public List<SectionDTO> sections(@PathVariable UUID courseId) {
        return purdueApiService.getSections(courseId);
    }
    
    @GetMapping("/section/{sectionId}")
    public SectionCourseDTO section(@PathVariable UUID sectionId) {
        return purdueApiService.getSection(sectionId);
    }
}
