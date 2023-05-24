import React, {type FormEvent, useCallback, useEffect, useState} from 'react'

interface SignupProps {
    signupFormAction: string
    signupFormUrl: string
}

const Signup: React.FC<SignupProps> = (props) => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        password_confirmation: ''
    })
    const [csrfToken, setCsrf] = useState<string | null>(null)

    // Get the current CSRF token on load
    useEffect(() => {
        const csrfTag = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')

        setCsrf(csrfTag.content)
    })

    const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        console.log(formState)
        setFormState({
            ...formState,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const submit = useCallback(async () => {
        await fetch(props.signupFormUrl, {
            method: 'POST',
            redirect: "follow",
            headers: {
                'X-CSRF-Token': csrfToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
    }, [csrfToken, formState])

    return (
        <section className={"w-1/2 mx-auto"}>
            <h1 className={"text-3xl font-bold"}>Join Find My Rares</h1>

            <form onSubmit={async (e) => {
                e.preventDefault()
                await submit()
            }} className={"mt-8 flex flex-col"} action={props.signupFormAction} method={"post"}>
                <input onPaste={handleChange} onInput={handleChange} className={"text-gray-700 rounded-lg mt-5 py-3"} name={"email"} placeholder={"Email"} type={"email"} />
                <input onPaste={handleChange} onInput={handleChange} className={"text-gray-700 rounded-lg mt-5 py-3"} name={"password"} placeholder={"Password"} type={"password"} />
                <input onPaste={handleChange} onInput={handleChange} className={"text-gray-700 rounded-lg mt-5 py-3"} name={"password_confirmation"} placeholder={"Confirm Password"} type={"password"} />
                <button className={"bg-blue-500 rounded-lg p-3 mt-5"} type={"submit"}>Submit</button>
            </form>
        </section>
    )
}

export default Signup;