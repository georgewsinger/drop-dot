goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10961__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10962__i = 0, G__10962__a = new Array(arguments.length -  0);
while (G__10962__i < G__10962__a.length) {G__10962__a[G__10962__i] = arguments[G__10962__i + 0]; ++G__10962__i;}
  args = new cljs.core.IndexedSeq(G__10962__a,0);
} 
return G__10961__delegate.call(this,args);};
G__10961.cljs$lang$maxFixedArity = 0;
G__10961.cljs$lang$applyTo = (function (arglist__10963){
var args = cljs.core.seq(arglist__10963);
return G__10961__delegate(args);
});
G__10961.cljs$core$IFn$_invoke$arity$variadic = G__10961__delegate;
return G__10961;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10964__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10965__i = 0, G__10965__a = new Array(arguments.length -  0);
while (G__10965__i < G__10965__a.length) {G__10965__a[G__10965__i] = arguments[G__10965__i + 0]; ++G__10965__i;}
  args = new cljs.core.IndexedSeq(G__10965__a,0);
} 
return G__10964__delegate.call(this,args);};
G__10964.cljs$lang$maxFixedArity = 0;
G__10964.cljs$lang$applyTo = (function (arglist__10966){
var args = cljs.core.seq(arglist__10966);
return G__10964__delegate(args);
});
G__10964.cljs$core$IFn$_invoke$arity$variadic = G__10964__delegate;
return G__10964;
})()
;

return null;
});
