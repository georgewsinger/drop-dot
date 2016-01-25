goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14894__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14895__i = 0, G__14895__a = new Array(arguments.length -  0);
while (G__14895__i < G__14895__a.length) {G__14895__a[G__14895__i] = arguments[G__14895__i + 0]; ++G__14895__i;}
  args = new cljs.core.IndexedSeq(G__14895__a,0);
} 
return G__14894__delegate.call(this,args);};
G__14894.cljs$lang$maxFixedArity = 0;
G__14894.cljs$lang$applyTo = (function (arglist__14896){
var args = cljs.core.seq(arglist__14896);
return G__14894__delegate(args);
});
G__14894.cljs$core$IFn$_invoke$arity$variadic = G__14894__delegate;
return G__14894;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14897__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14898__i = 0, G__14898__a = new Array(arguments.length -  0);
while (G__14898__i < G__14898__a.length) {G__14898__a[G__14898__i] = arguments[G__14898__i + 0]; ++G__14898__i;}
  args = new cljs.core.IndexedSeq(G__14898__a,0);
} 
return G__14897__delegate.call(this,args);};
G__14897.cljs$lang$maxFixedArity = 0;
G__14897.cljs$lang$applyTo = (function (arglist__14899){
var args = cljs.core.seq(arglist__14899);
return G__14897__delegate(args);
});
G__14897.cljs$core$IFn$_invoke$arity$variadic = G__14897__delegate;
return G__14897;
})()
;

return null;
});
