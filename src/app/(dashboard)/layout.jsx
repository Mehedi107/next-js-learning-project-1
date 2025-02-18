import React from 'react';

const DashboardLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        {/* Sidebar link */}
        <div className="col-span-3 bg-gray-500 h-[calc(100vh-65px)]">
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
          </ul>
        </div>

        {/* Dashboard main content */}
        <div className="col-span-9">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et cum hic
            illum voluptates facere, id aliquam inventore commodi qui nostrum,
            vitae expedita quam voluptatibus. Rem nam similique quisquam beatae
            repellendus odio quam tempora, consequuntur enim et in officiis
            laborum, blanditiis velit eaque earum iusto quas laboriosam!
            Aperiam, rerum sunt quasi repellat pariatur ad mollitia architecto,
            laudantium accusamus natus minima eveniet. Impedit unde debitis
            aperiam minima atque velit ipsam nisi similique odio eveniet
            sapiente dolor obcaecati nostrum illum excepturi mollitia autem
            doloribus non nam eligendi accusantium, error numquam! Tenetur
            autem, sequi iure necessitatibus modi quibusdam, nostrum
            exercitationem voluptas dolorum voluptatibus dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
