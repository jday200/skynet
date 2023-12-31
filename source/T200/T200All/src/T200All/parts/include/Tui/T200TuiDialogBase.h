#ifndef T200TUIDIALOGBASE_H
#define T200TUIDIALOGBASE_H

#include "T200Common.h"


class T200TuiDialogBase
{
    public:
        T200TuiDialogBase();
        virtual ~T200TuiDialogBase();

        T200VOID            draw();


        T200VOID            clear();

        T200VOID            draw_title();
        T200VOID            draw_panel();

    protected:
        T200BYTE            x;
        T200BYTE            y;
        T200BYTE            rows;
        T200BYTE            columns;

    private:
};

#endif // T200TUIDIALOGBASE_H
