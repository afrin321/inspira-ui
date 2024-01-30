import React, {useContext} from 'react'
import cs1 from './../assets/cola1.png'
import cs2 from './../assets/cola2.png'
import cs3 from './../assets/cola3.png'
import cs4 from './../assets/cola4.png'
import cs5 from './../assets/cola5.png'
import VisibilityContext from './../context/menuVisibleContext'

function Privacy() {
  const { setPopupVisible,  } = useContext(VisibilityContext)


  
  
  return (
    <div className="w-full h-auto relative ">
      <div onClick={() => setPopupVisible(false)} className='w-[50px] h-[50px] bg-gray-300 text-gray-700 rounded-full border-4 border-gray-100 p-auto flex justify-center items-center font-semibold absolute right-5 top-5 popup_close'>X</div>
      
      <div className="h-[1211px] w-full absolute top-[60px] flex flex-col gap-10 py-[4%] my-[4%] px-[10%] !pb-[100px]">
      <p className='!text-center !w-full'>
            AVISO DE PRIVACIDAD
        </p>
        <p>
        [_______NOMBRE EMPRESA__ www.inspira-brands.com, ____], es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
        </p>
        <p>
        ¿Para qué fines utilizaremos sus datos personales?
        </p>

        <p>
        Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
        </p>
        
        <p>
        •	Envío de información sobre servicios de la empresa.
        •	Mercadotecnia y publicidad.

        </p>
        <p>
        De manera adicional, utilizaremos su información personal para las siguientes finalidades que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
•	Para conocer, en su caso, su opinión respecto de la calidad en la prestación de nuestros servicios.

        </p>
        <p>
        En caso de que no desee que sus datos personales sean tratados para estos fines adicionales, desde este momento usted nos puede comunicar lo anterior, al correo electrónico [info@inspira-brands.com]así como al número de teléfono [+(52)5551620325]
        </p>
        <p>
        La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.
        </p>
        <p>
        ¿Qué datos personales utilizaremos para estos fines?
        </p>

        <p>
        Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: Nombre, correo electrónico y teléfono.
        </p>

        <p>
        ¿Con quién compartimos su información personal y para qué fines?
        </p>

        <p>Le informamos que sus datos personales NO son ni serán compartidos con personas, empresas, organizaciones y autoridades distintas a nosotros dentro o fuera del país, bajo ninguna circunstancia. </p>

        <p>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</p>

        <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>

        <p>
        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva en el correo electrónico [info@inspira-brands.com].
        </p>

        <p>
        Para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, usted podrá llamar al siguiente número telefónico [+(52)5551620325].ingresar a nuestro sitio de Internet www.inspira-brands.com a la sección “Aviso de Privacidad”, o bien ponerse en contacto con nuestro Departamento de Privacidad, que dará trámite a las solicitudes para el ejercicio de estos derechos, y atenderá cualquier duda que pudiera tener respecto al tratamiento de su información. Los datos de contacto del Departamento de Privacidad a los datos ptreviamente señalados.
        </p>

        <p>
        ¿Cómo puede revocar su consentimiento para el uso de sus datos personales?
        <br/>
        Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.
        <br/>
        Para revocar su consentimiento deberá presentar su solicitud en correo electrónico [info@inspira-brands.com] así como al número de teléfono [+(52)5551620325],ingresar a nuestro sitio de Internet www.inspira-brands.com a la sección “Aviso de Privacidad”.
        </p>

        <p>
            ¿Cómo puede limitar el uso o divulgación de su información personal? <br/>
            Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios:

        </p>

        <p>
        •	Su inscripción en el Registro Público para Evitar Publicidad, que está a cargo de la Procuraduría Federal del Consumidor, con la finalidad de que sus datos personales no sean utilizados para recibir publicidad o promociones de empresas de bienes o servicios. Para mayor información sobre este registro, usted puede consultar el portal de Internet de la PROFECO, o bien ponerse en contacto directo con ésta.

•	Su registro en el listado de exclusión, a fin de que sus datos personales no sean tratados para fines mercadotécnicos, publicitarios o de prospección comercial por nuestra parte. Para mayor información enviar un correo electrónico a la siguiente dirección[info@inspira-brands.com], o bien, ingresar a nuestro sitio de Internet www.inspira-brands.com a la sección “Aviso de Privacidad”.

        </p>

        <p>
        El uso de tecnologías de rastreo en nuestro portal de Internet<br/>
Le informamos que en nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de Internet, así como brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página.

        </p>

        <p>
        ¿Cómo puede conocer los cambios a este aviso de privacidad?<br/>
El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.

        </p>

        <p>
        Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestro sitio de Internet www.inspira-brands.com a la sección “Aviso de Privacidad”.
        </p>

        <p className='!w-full !text-right'>
        Última actualización 11 de enero de 2024.
        </p>



      </div>
    </div>
  )
}

export default Privacy


{/* <div className='w-full h-full relative  px-[10%] py-[4%]'>
        <div onClick={() => setPopupVisible(false)} className='w-[50px] h-[50px] bg-gray-300 text-gray-700 rounded-full border-4 border-gray-100 p-auto flex justify-center items-center font-semibold absolute right-5 top-5 popup_close'>X</div>
        <div className='flex flex-col gap-10 justify-start w-full'>
        <p className='!text-center !w-full'>
            AVISO DE PRIVACIDAD
        </p>
        <p>
        [_______NOMBRE EMPRESA__ www.inspira-brands.com, ____], es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
        </p>
        <p>
        ¿Para qué fines utilizaremos sus datos personales?
        </p>

        <p>
        Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
        </p>
        
        <p>
        •	Envío de información sobre servicios de la empresa.
        •	Mercadotecnia y publicidad.

        </p>
        <p>
        De manera adicional, utilizaremos su información personal para las siguientes finalidades que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
•	Para conocer, en su caso, su opinión respecto de la calidad en la prestación de nuestros servicios.

        </p>
        <p>
        En caso de que no desee que sus datos personales sean tratados para estos fines adicionales, desde este momento usted nos puede comunicar lo anterior, al correo electrónico [info@inspira-brands.com]así como al número de teléfono [+(52)5551620325]
        </p>
        <p>
        La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.
        </p>
        <p>
        ¿Qué datos personales utilizaremos para estos fines?
        </p>

        <p>
        Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: Nombre, correo electrónico y teléfono.
        </p>

        <p>
        ¿Con quién compartimos su información personal y para qué fines?
        </p>

        <p>Le informamos que sus datos personales NO son ni serán compartidos con personas, empresas, organizaciones y autoridades distintas a nosotros dentro o fuera del país, bajo ninguna circunstancia. </p>

        <p>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</p>

        <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>

        <p>
        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva en el correo electrónico [info@inspira-brands.com].
        </p>

        <p>
        Para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, usted podrá llamar al siguiente número telefónico [+(52)5551620325].ingresar a nuestro sitio de Internet www.inspira-brands.com a la sección “Aviso de Privacidad”, o bien ponerse en contacto con nuestro Departamento de Privacidad, que dará trámite a las solicitudes para el ejercicio de estos derechos, y atenderá cualquier duda que pudiera tener respecto al tratamiento de su información. Los datos de contacto del Departamento de Privacidad a los datos ptreviamente señalados.
        </p>

        <p>
        ¿Cómo puede revocar su consentimiento para el uso de sus datos personales?
        <br/>
        Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.
        <br/>
        Para revocar su consentimiento deberá presentar su solicitud en correo electrónico [info@inspira-brands.com] así como al número de teléfono [+(52)5551620325],ingresar a nuestro sitio de Internet www.inspira-brands.com a la sección “Aviso de Privacidad”.
        </p>

        <p>
            ¿Cómo puede limitar el uso o divulgación de su información personal? <br/>
            Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios:

        </p>

        <p>
        •	Su inscripción en el Registro Público para Evitar Publicidad, que está a cargo de la Procuraduría Federal del Consumidor, con la finalidad de que sus datos personales no sean utilizados para recibir publicidad o promociones de empresas de bienes o servicios. Para mayor información sobre este registro, usted puede consultar el portal de Internet de la PROFECO, o bien ponerse en contacto directo con ésta.

•	Su registro en el listado de exclusión, a fin de que sus datos personales no sean tratados para fines mercadotécnicos, publicitarios o de prospección comercial por nuestra parte. Para mayor información enviar un correo electrónico a la siguiente dirección[info@inspira-brands.com], o bien, ingresar a nuestro sitio de Internet www.inspira-brands.com a la sección “Aviso de Privacidad”.

        </p>

        <p>
        El uso de tecnologías de rastreo en nuestro portal de Internet<br/>
Le informamos que en nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de Internet, así como brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página.

        </p>

        <p>
        ¿Cómo puede conocer los cambios a este aviso de privacidad?<br/>
El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.

        </p>

        <p>
        Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestro sitio de Internet www.inspira-brands.com a la sección “Aviso de Privacidad”.
        </p>

        <p className='!w-full !text-right'>
        Última actualización 11 de enero de 2024.
        </p>
        </div>
    </div> */}

