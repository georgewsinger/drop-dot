goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__157413__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__157413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157414__i = 0, G__157414__a = new Array(arguments.length -  0);
while (G__157414__i < G__157414__a.length) {G__157414__a[G__157414__i] = arguments[G__157414__i + 0]; ++G__157414__i;}
  args = new cljs.core.IndexedSeq(G__157414__a,0);
} 
return G__157413__delegate.call(this,args);};
G__157413.cljs$lang$maxFixedArity = 0;
G__157413.cljs$lang$applyTo = (function (arglist__157415){
var args = cljs.core.seq(arglist__157415);
return G__157413__delegate(args);
});
G__157413.cljs$core$IFn$_invoke$arity$variadic = G__157413__delegate;
return G__157413;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__157416__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__157416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157417__i = 0, G__157417__a = new Array(arguments.length -  0);
while (G__157417__i < G__157417__a.length) {G__157417__a[G__157417__i] = arguments[G__157417__i + 0]; ++G__157417__i;}
  args = new cljs.core.IndexedSeq(G__157417__a,0);
} 
return G__157416__delegate.call(this,args);};
G__157416.cljs$lang$maxFixedArity = 0;
G__157416.cljs$lang$applyTo = (function (arglist__157418){
var args = cljs.core.seq(arglist__157418);
return G__157416__delegate(args);
});
G__157416.cljs$core$IFn$_invoke$arity$variadic = G__157416__delegate;
return G__157416;
})()
;

return null;
});
