"use client";

import { Honeybadger } from '@honeybadger-io/react';

export default function ErrorReporter() {
    const report = async () => {
        await Honeybadger.notifyAsync('this is a test error');
        alert(`Error reported`);
    }

    return (
        <button onClick={report}>Report Error</button>
    )
}
