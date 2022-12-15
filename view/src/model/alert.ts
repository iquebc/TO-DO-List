export type AlertType = "success" | "error" | "warning" | "info";

export class AlertModel {
  title: string;
  message: string;
  type: AlertType;

  constructor(title: string, message: string, type: AlertType) {
    this.title = title;
    this.message = message;
    this.type = type;
  }

  static successMessage(title: string, message: string) {
    return new AlertModel(title, message, "success");
  }
  static errorMessage(title: string, message: string) {
    return new AlertModel(title, message, "error");
  }
  static warningMessage(title: string, message: string) {
    return new AlertModel(title, message, "warning");
  }
  static infoMessage(title: string, message: string) {
    return new AlertModel(title, message, "info");
  }
}
