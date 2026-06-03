export function Header() {
  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <box
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        gap={0.5}
      >
        <ascii-font font="tiny" text="Night" color="gray" />
        <ascii-font font="tiny" text="Code" />
      </box>
    </box>
  );
}
