goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31514__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31515__i = 0, G__31515__a = new Array(arguments.length -  0);
while (G__31515__i < G__31515__a.length) {G__31515__a[G__31515__i] = arguments[G__31515__i + 0]; ++G__31515__i;}
  args = new cljs.core.IndexedSeq(G__31515__a,0);
} 
return G__31514__delegate.call(this,args);};
G__31514.cljs$lang$maxFixedArity = 0;
G__31514.cljs$lang$applyTo = (function (arglist__31516){
var args = cljs.core.seq(arglist__31516);
return G__31514__delegate(args);
});
G__31514.cljs$core$IFn$_invoke$arity$variadic = G__31514__delegate;
return G__31514;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31517__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31518__i = 0, G__31518__a = new Array(arguments.length -  0);
while (G__31518__i < G__31518__a.length) {G__31518__a[G__31518__i] = arguments[G__31518__i + 0]; ++G__31518__i;}
  args = new cljs.core.IndexedSeq(G__31518__a,0);
} 
return G__31517__delegate.call(this,args);};
G__31517.cljs$lang$maxFixedArity = 0;
G__31517.cljs$lang$applyTo = (function (arglist__31519){
var args = cljs.core.seq(arglist__31519);
return G__31517__delegate(args);
});
G__31517.cljs$core$IFn$_invoke$arity$variadic = G__31517__delegate;
return G__31517;
})()
;

return null;
});
