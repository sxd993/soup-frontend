import { Button } from "@/shared/ui";

type RespondToOrderSuccessStateProps = {
  onClose: () => void;
};

export function RespondToOrderSuccessState({
  onClose,
}: RespondToOrderSuccessStateProps) {
  return (
    <div className="mx-auto py-15 text-center flex flex-col gap-6">
      <h3 className="text-[22px] font-semibold leading-[115%] text-secondary sm:text-[28px] sm:leading-[110%]">
        Ваш отклик и контакты отправлены
      </h3>
      <p className="mx-auto text-[14px] max-w-[300px] leading-[130%] text-secondary">
        Заказчик свяжется с вами, если ваше предложение ему понравится
      </p>
    </div>
  );
}
