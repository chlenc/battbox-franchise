import React, { ReactElement } from 'react'

export type UserEmail<Props> = (props: Props) => {
    body: ReactElement<Props>,
    subject: string,
}

const bodyStyle = {
    width: '100%',
    margin: 0,
    padding: 0,
    WebkitTextSizeAdjust: '100%',
    MsTextSizeAdjust: '100%',
}


const Layout: React.FC< { title: string }> = ({ title , children }) => (
    <html lang="fr">
    <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{title}</title>
    </head>
    <body style={bodyStyle}>
    <h1>{title}</h1>
    <div>
        {children}
        <p>
            go fuck yourself
        </p>
    </div>
    </body>
    </html>
)


type Props = {
}

const UserEmail: UserEmail<Props> = () => ({
    subject: `Welcome faggot!` ,
    body: (
        <Layout title={`Welcome faggot`}>
            <div>
                <p>Your are faggot, suck my cook</p>
            </div>
        </Layout>
    ),
})

export default UserEmail
