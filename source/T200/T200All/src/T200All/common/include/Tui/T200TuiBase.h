#ifndef T200TUIBASE_H
#define T200TUIBASE_H

#include "T200Common.h"
#include "T200String.h"


class T200TuiBase
{
    public:
        T200TuiBase();
        virtual ~T200TuiBase();

        virtual T200VOID            get_info() = 0;

        virtual T200VOID            set_color() = 0;
        virtual T200VOID            get_color() = 0;

        virtual T200VOID            set_attribute() = 0;
        virtual T200VOID            get_attribute() = 0;

        virtual T200VOID            moveto(T200INT, T200INT) = 0;
        virtual T200VOID            print(T200String) = 0;

        virtual T200VOID            settextcolor(T200INT) = 0;
        virtual T200VOID            setbackgroundcolor(T200INT) = 0;

        virtual T200VOID            clear() = 0;

    protected:
        T200BYTE                    m_width             = 0;
        T200BYTE                    m_height            = 0;
        T200BYTE                    m_cursor_x          = 0;
        T200BYTE                    m_cursor_y          = 0;
        T200BYTE                    m_maximum_width     = 0;
        T200BYTE                    m_maximum_height    = 0;

        T200DWORD                   m_foreground_color      = 0;
        T200DWORD                   m_background_color      = 0;
        T200DWORD                   m_color                 = 0;

    private:
};

#endif // T200TUIBASE_H
