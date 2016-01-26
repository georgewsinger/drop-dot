goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24914__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24915__i = 0, G__24915__a = new Array(arguments.length -  0);
while (G__24915__i < G__24915__a.length) {G__24915__a[G__24915__i] = arguments[G__24915__i + 0]; ++G__24915__i;}
  args = new cljs.core.IndexedSeq(G__24915__a,0);
} 
return G__24914__delegate.call(this,args);};
G__24914.cljs$lang$maxFixedArity = 0;
G__24914.cljs$lang$applyTo = (function (arglist__24916){
var args = cljs.core.seq(arglist__24916);
return G__24914__delegate(args);
});
G__24914.cljs$core$IFn$_invoke$arity$variadic = G__24914__delegate;
return G__24914;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24917__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24918__i = 0, G__24918__a = new Array(arguments.length -  0);
while (G__24918__i < G__24918__a.length) {G__24918__a[G__24918__i] = arguments[G__24918__i + 0]; ++G__24918__i;}
  args = new cljs.core.IndexedSeq(G__24918__a,0);
} 
return G__24917__delegate.call(this,args);};
G__24917.cljs$lang$maxFixedArity = 0;
G__24917.cljs$lang$applyTo = (function (arglist__24919){
var args = cljs.core.seq(arglist__24919);
return G__24917__delegate(args);
});
G__24917.cljs$core$IFn$_invoke$arity$variadic = G__24917__delegate;
return G__24917;
})()
;

return null;
});
