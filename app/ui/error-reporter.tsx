"use client";

import { Button } from "@/app/ui/button";
import { Honeybadger } from '@honeybadger-io/react';
import { notifyHoneybadgerOnServer } from "@/app/actions";

export default function ErrorReporter() {
    const report = async () => {
        await Honeybadger.notifyAsync('this is a test error');
        alert(`Error reported`);
    }

    const reportFromServer = async () => {
        await notifyHoneybadgerOnServer("this is a test error from server");
        alert(`Error reported from server`);
    }

    return (
        <div className={"flex items-center"}>
            <Button onClick={report}>Report Error</Button>
            <Button onClick={reportFromServer}>
                Report error from a server action
            </Button>
        </div>
    )
}
