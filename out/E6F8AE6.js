goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__223021__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__223021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__223022__i = 0, G__223022__a = new Array(arguments.length -  0);
while (G__223022__i < G__223022__a.length) {G__223022__a[G__223022__i] = arguments[G__223022__i + 0]; ++G__223022__i;}
  args = new cljs.core.IndexedSeq(G__223022__a,0);
} 
return G__223021__delegate.call(this,args);};
G__223021.cljs$lang$maxFixedArity = 0;
G__223021.cljs$lang$applyTo = (function (arglist__223023){
var args = cljs.core.seq(arglist__223023);
return G__223021__delegate(args);
});
G__223021.cljs$core$IFn$_invoke$arity$variadic = G__223021__delegate;
return G__223021;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__223024__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__223024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__223025__i = 0, G__223025__a = new Array(arguments.length -  0);
while (G__223025__i < G__223025__a.length) {G__223025__a[G__223025__i] = arguments[G__223025__i + 0]; ++G__223025__i;}
  args = new cljs.core.IndexedSeq(G__223025__a,0);
} 
return G__223024__delegate.call(this,args);};
G__223024.cljs$lang$maxFixedArity = 0;
G__223024.cljs$lang$applyTo = (function (arglist__223026){
var args = cljs.core.seq(arglist__223026);
return G__223024__delegate(args);
});
G__223024.cljs$core$IFn$_invoke$arity$variadic = G__223024__delegate;
return G__223024;
})()
;

return null;
});
