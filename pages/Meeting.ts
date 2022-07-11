import { Detail, Protocoll } from "./protocoll";

export class Meeting {

    private meetingTitle: string;
    private dateOfMeeting: string;
    private goal: string;
    private participants: string;
    private moderator: string;
    private scheduledTime: string;
    private actualTime: string;
    private agenda: string;
    private openIssues: string;
    private decisions: string;
    private openTopics: string;
    private todo: string;
    private protocoll: Protocoll;

    constructor(meetingTitle: string, dateOfMeeting: string, goal: string, participants: string, scheduledTime: string) {
        this.meetingTitle = meetingTitle;
        this.dateOfMeeting = dateOfMeeting;
        this.goal = goal;
        this.participants = participants;
        this.scheduledTime = scheduledTime;
        this.actualTime = "06.07.2022"
        this.protocoll = new Protocoll([new Detail('', '')])
    }

    public setMeetingTitle(meetingTitle: string) {
        this.meetingTitle = meetingTitle;
    }

    public setDateOfMeeting(dateOfMeeting: string) {
        this.dateOfMeeting = dateOfMeeting;
    }

    public setGoal(goal: string) {
        this.goal = goal;
    }

    public setParticipants(participants: string) {
        this.participants = participants;
    }

    public setModerator(moderator: string) {
        this.moderator = moderator;
    }

    public setScheduledTime(scheduledTime: string) {
        this.scheduledTime = scheduledTime;
    }

    public setActualTime(actualTime: string) {
        this.actualTime = actualTime;
    }

    public setAgenda(agenda: string) {
        this.agenda = agenda;
    }

    public setOpenIssues(openIssues: string) {
        this.openIssues = openIssues;
    }

    public setDecisions(decisions: string) {
        this.decisions = decisions;
    }

    public setOpenTopics(openTopics: string) {
        this.openTopics = openTopics;
    }

    public setTodo(todo: string) {
        this.todo = todo;
    }


    public getMeetingTitle(): string {
        return this.meetingTitle;
    }

    public getDateOfMeeting(): string {
        return this.dateOfMeeting;
    }

    public getGoal(): string {
        return this.goal;
    }

    public getParticipants(): string {
        return this.participants;
    }

    public getModerator(): string {
        return this.moderator;
    }

    public getScheduledTime(): string {
        return this.scheduledTime;
    }

    public getActualTime(): string {
        return this.actualTime;
    }

    public getAgenda(): string {
        return this.agenda;
    }

    public getOpenIssues(): string {
        return this.openIssues;
    }

    public getDecisions(): string {
        return this.decisions;
    }

    public getOpenTopics(): string {
        return this.openTopics;
    }

    public getTodo(): string {
        return this.todo;
    }

    public getProtocoll(): Protocoll {
        return this.protocoll;
    }

    public setProtocoll(protocoll: Protocoll) {
        this.protocoll = protocoll;
    }
}