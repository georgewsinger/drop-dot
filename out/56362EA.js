goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34574__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34575__i = 0, G__34575__a = new Array(arguments.length -  0);
while (G__34575__i < G__34575__a.length) {G__34575__a[G__34575__i] = arguments[G__34575__i + 0]; ++G__34575__i;}
  args = new cljs.core.IndexedSeq(G__34575__a,0);
} 
return G__34574__delegate.call(this,args);};
G__34574.cljs$lang$maxFixedArity = 0;
G__34574.cljs$lang$applyTo = (function (arglist__34576){
var args = cljs.core.seq(arglist__34576);
return G__34574__delegate(args);
});
G__34574.cljs$core$IFn$_invoke$arity$variadic = G__34574__delegate;
return G__34574;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34577__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34578__i = 0, G__34578__a = new Array(arguments.length -  0);
while (G__34578__i < G__34578__a.length) {G__34578__a[G__34578__i] = arguments[G__34578__i + 0]; ++G__34578__i;}
  args = new cljs.core.IndexedSeq(G__34578__a,0);
} 
return G__34577__delegate.call(this,args);};
G__34577.cljs$lang$maxFixedArity = 0;
G__34577.cljs$lang$applyTo = (function (arglist__34579){
var args = cljs.core.seq(arglist__34579);
return G__34577__delegate(args);
});
G__34577.cljs$core$IFn$_invoke$arity$variadic = G__34577__delegate;
return G__34577;
})()
;

return null;
});
