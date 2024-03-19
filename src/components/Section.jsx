export default function Section({ title, children, ...props }) {
    return (
        <secction {...props}>
            <h2>{title}</h2>
            {children}
        </secction>
    )
}