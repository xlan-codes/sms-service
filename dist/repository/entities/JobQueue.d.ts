export declare class JobQueue {
    assignedUserId: string | null;
    id: string;
    name: string | null;
    deleted: boolean | null;
    dateEntered: Date | null;
    dateModified: Date | null;
    schedulerId: string | null;
    executeTime: Date | null;
    status: string | null;
    resolution: string | null;
    message: string | null;
    target: string | null;
    data: string | null;
    requeue: boolean | null;
    retryCount: number | null;
    failureCount: number | null;
    jobDelay: number | null;
    client: string | null;
    percentComplete: number | null;
}
