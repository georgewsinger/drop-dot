goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59265__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59266__i = 0, G__59266__a = new Array(arguments.length -  0);
while (G__59266__i < G__59266__a.length) {G__59266__a[G__59266__i] = arguments[G__59266__i + 0]; ++G__59266__i;}
  args = new cljs.core.IndexedSeq(G__59266__a,0);
} 
return G__59265__delegate.call(this,args);};
G__59265.cljs$lang$maxFixedArity = 0;
G__59265.cljs$lang$applyTo = (function (arglist__59267){
var args = cljs.core.seq(arglist__59267);
return G__59265__delegate(args);
});
G__59265.cljs$core$IFn$_invoke$arity$variadic = G__59265__delegate;
return G__59265;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59268__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59269__i = 0, G__59269__a = new Array(arguments.length -  0);
while (G__59269__i < G__59269__a.length) {G__59269__a[G__59269__i] = arguments[G__59269__i + 0]; ++G__59269__i;}
  args = new cljs.core.IndexedSeq(G__59269__a,0);
} 
return G__59268__delegate.call(this,args);};
G__59268.cljs$lang$maxFixedArity = 0;
G__59268.cljs$lang$applyTo = (function (arglist__59270){
var args = cljs.core.seq(arglist__59270);
return G__59268__delegate(args);
});
G__59268.cljs$core$IFn$_invoke$arity$variadic = G__59268__delegate;
return G__59268;
})()
;

return null;
});
