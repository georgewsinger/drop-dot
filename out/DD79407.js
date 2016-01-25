goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__95743__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__95743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95744__i = 0, G__95744__a = new Array(arguments.length -  0);
while (G__95744__i < G__95744__a.length) {G__95744__a[G__95744__i] = arguments[G__95744__i + 0]; ++G__95744__i;}
  args = new cljs.core.IndexedSeq(G__95744__a,0);
} 
return G__95743__delegate.call(this,args);};
G__95743.cljs$lang$maxFixedArity = 0;
G__95743.cljs$lang$applyTo = (function (arglist__95745){
var args = cljs.core.seq(arglist__95745);
return G__95743__delegate(args);
});
G__95743.cljs$core$IFn$_invoke$arity$variadic = G__95743__delegate;
return G__95743;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__95746__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__95746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95747__i = 0, G__95747__a = new Array(arguments.length -  0);
while (G__95747__i < G__95747__a.length) {G__95747__a[G__95747__i] = arguments[G__95747__i + 0]; ++G__95747__i;}
  args = new cljs.core.IndexedSeq(G__95747__a,0);
} 
return G__95746__delegate.call(this,args);};
G__95746.cljs$lang$maxFixedArity = 0;
G__95746.cljs$lang$applyTo = (function (arglist__95748){
var args = cljs.core.seq(arglist__95748);
return G__95746__delegate(args);
});
G__95746.cljs$core$IFn$_invoke$arity$variadic = G__95746__delegate;
return G__95746;
})()
;

return null;
});
