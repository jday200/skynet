#ifndef T200LIBDISPLAY_H
#define T200LIBDISPLAY_H

#include "T200Common.h"
#include "T200String.h"


typedef enum {
    T200DISPLAY_TEXT_MODE,
    T200DISPLAY_GRAPHICS_MODE
}T200DISPLAY_MODE;


class T200LibDisplay
{
    public:
        T200LibDisplay();
        virtual ~T200LibDisplay();

        static T200BOOL         setMode(T200DISPLAY_MODE);

        static T200BOOL         print(T200String);

    protected:

    private:
};

#endif // T200LIBDISPLAY_H
