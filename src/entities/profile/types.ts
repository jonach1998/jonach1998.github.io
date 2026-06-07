export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly linkedin: string;
  readonly github: string;
}

export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly summary: string;
  readonly contact: ContactInfo;
}
