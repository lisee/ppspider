import {Job, JobStatus} from "./Job";
import {JobExeTime} from "../data/Types";
import {Serialize} from "../../common/serialize/Serialize";
import {StringUtil} from "../../common/util/StringUtil";

@Serialize()
export class DefaultJob implements Job {

    private _id: string;

    private _parentId: string;

    private _url: string;

    private _queue: string;

    private _key: string;

    private _datas: any;

    private _priority: number;

    private _depth: number;

    private _status: JobStatus;

    private _tryNum: number;

    private _createTime: number;

    private _exeTimes: JobExeTime[];

    id(): string {
        return this._id;
    }

    parentId(parentId?: string): string {
        if (parentId != null) {
            this._parentId = parentId;
        }
        return this._parentId;
    }

    queue(queue?: string): string {
        if (queue != null) {
            this._queue = queue;
        }
        return this._queue;
    }

    url(): string {
        return this._url;
    }

    key(key?: string): string {
        if (key != null) {
            this._key = key;
        }
        return this._key || this._url;
    }

    datas(newDatas?: any): any {
        if (newDatas != null) {
            this._datas = newDatas;
        }
        return this._datas;
    }

    priority(priority?: number): number {
        if (priority != null) {
            this._priority = priority;
        }
        return this._priority;
    }

    depth(depth?: number): number {
        if (depth != null) {
            this._depth = depth;
        }
        return this._depth;
    }

    status(status?: JobStatus): JobStatus {
        if (status != null) {
            this._status = status;
        }
        return this._status;
    }

    tryNum(tryNum?: number): number {
        if (tryNum != null) {
            this._tryNum = tryNum;
        }
        return this._tryNum;
    }

    createTime(): number {
        return this._createTime;
    }

    exeTimes(time?: JobExeTime): JobExeTime[] {
        if (!this._exeTimes) this._exeTimes = [];
        if (time) {
            if (time.start != null) {
                this._exeTimes.push(time);
            }
            else if (time.end != null && this._exeTimes.length > 0) {
                this._exeTimes[this._exeTimes.length - 1].end = time.end;
            }
        }
        return this._exeTimes;
    }

    constructor(url: string) {
        const date = new Date();
        this._id = StringUtil.id();
        this._createTime = date.getTime();
        this._url = url;
    }

}