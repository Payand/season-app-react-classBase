const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui massive text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "loading ...",
};

export default Spinner;
