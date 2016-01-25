goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22897__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22898__i = 0, G__22898__a = new Array(arguments.length -  0);
while (G__22898__i < G__22898__a.length) {G__22898__a[G__22898__i] = arguments[G__22898__i + 0]; ++G__22898__i;}
  args = new cljs.core.IndexedSeq(G__22898__a,0);
} 
return G__22897__delegate.call(this,args);};
G__22897.cljs$lang$maxFixedArity = 0;
G__22897.cljs$lang$applyTo = (function (arglist__22899){
var args = cljs.core.seq(arglist__22899);
return G__22897__delegate(args);
});
G__22897.cljs$core$IFn$_invoke$arity$variadic = G__22897__delegate;
return G__22897;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22900__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22901__i = 0, G__22901__a = new Array(arguments.length -  0);
while (G__22901__i < G__22901__a.length) {G__22901__a[G__22901__i] = arguments[G__22901__i + 0]; ++G__22901__i;}
  args = new cljs.core.IndexedSeq(G__22901__a,0);
} 
return G__22900__delegate.call(this,args);};
G__22900.cljs$lang$maxFixedArity = 0;
G__22900.cljs$lang$applyTo = (function (arglist__22902){
var args = cljs.core.seq(arglist__22902);
return G__22900__delegate(args);
});
G__22900.cljs$core$IFn$_invoke$arity$variadic = G__22900__delegate;
return G__22900;
})()
;

return null;
});
