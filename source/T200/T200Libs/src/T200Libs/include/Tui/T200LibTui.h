#ifndef T200LIBTUI_H
#define T200LIBTUI_H

#include "T200Class.h"
#include "T200Common.h"
#include "T200String.h"
#include "Hardware/T200LibDisplay.h"


class T200LibTui : public T200Class
{
    public:
        T200LibTui();
        virtual ~T200LibTui();

        T200VOID            print(T200String);
        T200VOID            moveto(T200INT, T200INT);

    protected:
        T200VOID            create();
        T200VOID            destroy();

    private:
        T200LibDisplay*     m_display           = T200NULL;

};

#endif // T200LIBTUI_H
