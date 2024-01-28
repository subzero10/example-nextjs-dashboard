import Honeybadger from '@honeybadger-io/js'

const projectRoot = process.cwd()
Honeybadger
    .configure({
        apiKey: process.env.NEXT_PUBLIC_HONEYBADGER_API_KEY,
        environment: process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL_ENV || process.env.NODE_ENV,
        revision: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_HONEYBADGER_REVISION,
        projectRoot: 'webpack://_N_E/./',
        debug: true,
        reportData: true,
    })
// .beforeNotify((notice) => {
//     notice!.backtrace.forEach((line) => {
//         if (line.file) {
//             line.file = line.file.replace(`${projectRoot}/.next/server`, `${process.env.NEXT_PUBLIC_HONEYBADGER_ASSETS_URL}/..`)
//         }
//         return line
//     })
// })

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const notify = searchParams.get('notify')
    if (notify === 'true') {
        await Honeybadger.notifyAsync('test error from route handler')

        return Response.json({ message: 'reported to Honeybadger' })
    }

    return Response.json({ message: 'did not report to Honeybadger' })
}
