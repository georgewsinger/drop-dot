goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__288894__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__288894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__288895__i = 0, G__288895__a = new Array(arguments.length -  0);
while (G__288895__i < G__288895__a.length) {G__288895__a[G__288895__i] = arguments[G__288895__i + 0]; ++G__288895__i;}
  args = new cljs.core.IndexedSeq(G__288895__a,0);
} 
return G__288894__delegate.call(this,args);};
G__288894.cljs$lang$maxFixedArity = 0;
G__288894.cljs$lang$applyTo = (function (arglist__288896){
var args = cljs.core.seq(arglist__288896);
return G__288894__delegate(args);
});
G__288894.cljs$core$IFn$_invoke$arity$variadic = G__288894__delegate;
return G__288894;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__288897__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__288897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__288898__i = 0, G__288898__a = new Array(arguments.length -  0);
while (G__288898__i < G__288898__a.length) {G__288898__a[G__288898__i] = arguments[G__288898__i + 0]; ++G__288898__i;}
  args = new cljs.core.IndexedSeq(G__288898__a,0);
} 
return G__288897__delegate.call(this,args);};
G__288897.cljs$lang$maxFixedArity = 0;
G__288897.cljs$lang$applyTo = (function (arglist__288899){
var args = cljs.core.seq(arglist__288899);
return G__288897__delegate(args);
});
G__288897.cljs$core$IFn$_invoke$arity$variadic = G__288897__delegate;
return G__288897;
})()
;

return null;
});
