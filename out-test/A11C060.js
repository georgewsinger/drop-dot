goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38059__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38060__i = 0, G__38060__a = new Array(arguments.length -  0);
while (G__38060__i < G__38060__a.length) {G__38060__a[G__38060__i] = arguments[G__38060__i + 0]; ++G__38060__i;}
  args = new cljs.core.IndexedSeq(G__38060__a,0);
} 
return G__38059__delegate.call(this,args);};
G__38059.cljs$lang$maxFixedArity = 0;
G__38059.cljs$lang$applyTo = (function (arglist__38061){
var args = cljs.core.seq(arglist__38061);
return G__38059__delegate(args);
});
G__38059.cljs$core$IFn$_invoke$arity$variadic = G__38059__delegate;
return G__38059;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38062__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38063__i = 0, G__38063__a = new Array(arguments.length -  0);
while (G__38063__i < G__38063__a.length) {G__38063__a[G__38063__i] = arguments[G__38063__i + 0]; ++G__38063__i;}
  args = new cljs.core.IndexedSeq(G__38063__a,0);
} 
return G__38062__delegate.call(this,args);};
G__38062.cljs$lang$maxFixedArity = 0;
G__38062.cljs$lang$applyTo = (function (arglist__38064){
var args = cljs.core.seq(arglist__38064);
return G__38062__delegate(args);
});
G__38062.cljs$core$IFn$_invoke$arity$variadic = G__38062__delegate;
return G__38062;
})()
;

return null;
});
