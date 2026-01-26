export type ChangeEmailDto = {
  verificationId: string;
  newEmail: string;
};

export type ChangeEmailResponse = {
  verificationId: string;
};