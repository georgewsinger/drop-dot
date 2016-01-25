goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11786__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11787__i = 0, G__11787__a = new Array(arguments.length -  0);
while (G__11787__i < G__11787__a.length) {G__11787__a[G__11787__i] = arguments[G__11787__i + 0]; ++G__11787__i;}
  args = new cljs.core.IndexedSeq(G__11787__a,0);
} 
return G__11786__delegate.call(this,args);};
G__11786.cljs$lang$maxFixedArity = 0;
G__11786.cljs$lang$applyTo = (function (arglist__11788){
var args = cljs.core.seq(arglist__11788);
return G__11786__delegate(args);
});
G__11786.cljs$core$IFn$_invoke$arity$variadic = G__11786__delegate;
return G__11786;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11789__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11790__i = 0, G__11790__a = new Array(arguments.length -  0);
while (G__11790__i < G__11790__a.length) {G__11790__a[G__11790__i] = arguments[G__11790__i + 0]; ++G__11790__i;}
  args = new cljs.core.IndexedSeq(G__11790__a,0);
} 
return G__11789__delegate.call(this,args);};
G__11789.cljs$lang$maxFixedArity = 0;
G__11789.cljs$lang$applyTo = (function (arglist__11791){
var args = cljs.core.seq(arglist__11791);
return G__11789__delegate(args);
});
G__11789.cljs$core$IFn$_invoke$arity$variadic = G__11789__delegate;
return G__11789;
})()
;

return null;
});
