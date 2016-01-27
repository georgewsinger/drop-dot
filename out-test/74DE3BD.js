goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34416__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34417__i = 0, G__34417__a = new Array(arguments.length -  0);
while (G__34417__i < G__34417__a.length) {G__34417__a[G__34417__i] = arguments[G__34417__i + 0]; ++G__34417__i;}
  args = new cljs.core.IndexedSeq(G__34417__a,0);
} 
return G__34416__delegate.call(this,args);};
G__34416.cljs$lang$maxFixedArity = 0;
G__34416.cljs$lang$applyTo = (function (arglist__34418){
var args = cljs.core.seq(arglist__34418);
return G__34416__delegate(args);
});
G__34416.cljs$core$IFn$_invoke$arity$variadic = G__34416__delegate;
return G__34416;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34419__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34420__i = 0, G__34420__a = new Array(arguments.length -  0);
while (G__34420__i < G__34420__a.length) {G__34420__a[G__34420__i] = arguments[G__34420__i + 0]; ++G__34420__i;}
  args = new cljs.core.IndexedSeq(G__34420__a,0);
} 
return G__34419__delegate.call(this,args);};
G__34419.cljs$lang$maxFixedArity = 0;
G__34419.cljs$lang$applyTo = (function (arglist__34421){
var args = cljs.core.seq(arglist__34421);
return G__34419__delegate(args);
});
G__34419.cljs$core$IFn$_invoke$arity$variadic = G__34419__delegate;
return G__34419;
})()
;

return null;
});
