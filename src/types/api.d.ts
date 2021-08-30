// Types for APIs

interface Token {
  access: string
  refresh: string
}

interface Voucher {
  id: string
  posted_date: string
  available_date: string
  expiry_date: string
  name: string
  organization: string
  voucher_type: string
  description: string
  counter: number
  image: string
  code_uploaded: boolean
}

interface CodeByEmail {
  id: number
  voucher_id: number
  code_id: number
  email_id: number
}

type AdminVoucherFiles = {
  image?: string
  code_list?: string
  email_list?: string
}
interface AdminVoucher extends AdminVoucherFiles {
  id: number
  posted_date: string
  available_date: string
  expiry_date: string
  name: string
  voucher_type: string
  description?: string
  counter: number
  image: string
  code_uploaded?: boolean
  organization: string
}

type PostAdminVoucher = Omit<AdminVoucher, "id" | AdminVoucherFiles>

interface OrganizationVouchers {
  count: number
  next: string
  previous: string
  results: AdminVoucher[]
}

type Option = {
  value: string | number
  label: string
}

type VoucherType = "Food" | "Sport" | "Fashion" | "Others"
