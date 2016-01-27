goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__334932__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__334932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__334933__i = 0, G__334933__a = new Array(arguments.length -  0);
while (G__334933__i < G__334933__a.length) {G__334933__a[G__334933__i] = arguments[G__334933__i + 0]; ++G__334933__i;}
  args = new cljs.core.IndexedSeq(G__334933__a,0);
} 
return G__334932__delegate.call(this,args);};
G__334932.cljs$lang$maxFixedArity = 0;
G__334932.cljs$lang$applyTo = (function (arglist__334934){
var args = cljs.core.seq(arglist__334934);
return G__334932__delegate(args);
});
G__334932.cljs$core$IFn$_invoke$arity$variadic = G__334932__delegate;
return G__334932;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__334935__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__334935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__334936__i = 0, G__334936__a = new Array(arguments.length -  0);
while (G__334936__i < G__334936__a.length) {G__334936__a[G__334936__i] = arguments[G__334936__i + 0]; ++G__334936__i;}
  args = new cljs.core.IndexedSeq(G__334936__a,0);
} 
return G__334935__delegate.call(this,args);};
G__334935.cljs$lang$maxFixedArity = 0;
G__334935.cljs$lang$applyTo = (function (arglist__334937){
var args = cljs.core.seq(arglist__334937);
return G__334935__delegate(args);
});
G__334935.cljs$core$IFn$_invoke$arity$variadic = G__334935__delegate;
return G__334935;
})()
;

return null;
});
