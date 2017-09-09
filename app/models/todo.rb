# == Schema Information
#
# Table name: todos
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  description :text(65535)
#  created_by  :string(255)
#  done        :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Todo < ApplicationRecord
  validates_presence_of :title
  validates_presence_of :created_by
end
