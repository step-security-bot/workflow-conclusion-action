import type { Context } from '@actions/github/lib/context';
import type { Octokit } from '@technote-space/github-action-helper';
import type { Logger } from '@technote-space/github-action-log-helper';
export declare const getTargetRunId: (context: Context) => number;
export declare const getJobs: (octokit: Octokit, context: Context) => Promise<{
    total_count: number;
    jobs: {
        id: number;
        run_id: number;
        run_url: string;
        run_attempt?: number | undefined;
        node_id: string;
        head_sha: string;
        url: string;
        html_url: string | null;
        status: "queued" | "in_progress" | "completed";
        conclusion: string | null;
        started_at: string;
        completed_at: string | null;
        name: string;
        steps?: {
            status: "queued" | "in_progress" | "completed";
            conclusion: string | null;
            name: string;
            number: number;
            started_at?: string | null | undefined;
            completed_at?: string | null | undefined;
        }[] | undefined;
        check_run_url: string;
        labels: string[];
        runner_id: number | null;
        runner_name: string | null;
        runner_group_id: number | null;
        runner_group_name: string | null;
    }[];
} & {
    id: number;
    run_id: number;
    run_url: string;
    run_attempt?: number | undefined;
    node_id: string;
    head_sha: string;
    url: string;
    html_url: string | null;
    status: "queued" | "in_progress" | "completed";
    conclusion: string | null;
    started_at: string;
    completed_at: string | null;
    name: string;
    steps?: {
        status: "queued" | "in_progress" | "completed";
        conclusion: string | null;
        name: string;
        number: number;
        started_at?: string | null | undefined;
        completed_at?: string | null | undefined;
    }[] | undefined;
    check_run_url: string;
    labels: string[];
    runner_id: number | null;
    runner_name: string | null;
    runner_group_id: number | null;
    runner_group_name: string | null;
}[]>;
export declare const getJobConclusions: (jobs: Array<{
    conclusion: string | null;
}>) => Array<string>;
export declare const getWorkflowConclusion: (conclusions: Array<string>) => string;
export declare const execute: (logger: Logger, octokit: Octokit, context: Context) => Promise<void>;
