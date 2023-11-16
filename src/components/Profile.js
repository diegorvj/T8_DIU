import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  return (
    <div className="profile">
      <h1>Perfil</h1>
      <form>
        <label>
          Nombre completo:
          <input type="text" name="name" />
        </label>
        <label>
          RUT:
          <input type="text" name="rut" />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" />
        </label>
        <label>
          Fecha de nacimiento:
          <input type="date" name="birthdate" />
        </label>
        <label>
          Alergias:
          <input type="text" name="allergies" />
        </label>
        <label>
          Intolerancias alimenticias:
          <input type="text" name="foodIntolerances" />
        </label>
        <label>
          Medicación crónica:
          <textarea name="chronicMedication" />
        </label>
        <input className="submit-button" type="submit" value="Guardar" />
      </form>
    </div>
  );
};

export default Profile;
