import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './myMedicalConditionExperience.css';

export default function MyMedicalConditionExperience() {
    return (
        <div className="container">
            <h2>My Medical Condtion Experience</h2>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Injury</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Smoking Addiction</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Anxiety</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Drinking Addiction</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Lung Disease</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>

    );
}
