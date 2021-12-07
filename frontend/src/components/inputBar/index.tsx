import { InputBarWrapper, RegularButton, RegularInput } from "./styles";

export const InputBar = () => {
  return (
    <>
      <InputBarWrapper>
        <RegularInput placeholder="Write task to add" />
        <RegularButton primary>Add task</RegularButton>
      </InputBarWrapper>
    </>
  );
};
