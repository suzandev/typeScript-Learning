//* Enum : Set of fixed Values */
//! Senors Developer not requirement

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissible = canEdit(UserRoles.Admin);

console.log(isEditPermissible);
